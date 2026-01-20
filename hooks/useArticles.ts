import { useInfiniteQuery } from "@tanstack/react-query";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { useEffect, useRef } from "react";
import type { ArticlesResponse } from "@/types/articles";

export function useArticles() {
    // Use nuqs for all URL params
    const [params, setParams] = useQueryStates(
        {
            search: parseAsString.withDefault(""),
            page: parseAsInteger.withDefault(1),
            limit: parseAsInteger.withDefault(10),
        },
        {
           
            throttleMs: 300,
          
            shallow: true,
        }
    );

    const { search, page, limit } = params;


    const isFirstRender = useRef(true);
/* eslint-disable */
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
       
        if (page !== 1) {
            setParams({ page: 1 });
        }
    }, [search]);
/* eslint-enable */
  
    const articlesQuery = useInfiniteQuery({
        queryKey: ["articles", search, limit],
        queryFn: async ({ pageParam = 1 }): Promise<ArticlesResponse> => {
           
            const queryParams = new URLSearchParams({
                page: pageParam.toString(),
                limit: limit.toString(),
            });

            if (search) {
                queryParams.append("search", search);
            }

           
            const response = await fetch(`/api/articles?${queryParams.toString()}`);
            
            if (!response.ok) {
                throw new Error("Failed to fetch articles");
            }

            const json = await response.json();

            return json.data as ArticlesResponse;
        },
        getNextPageParam: (lastPage) => {
            const { page, totalPages } = lastPage.pagination;
            return page < totalPages ? page + 1 : undefined;
        },
        initialPageParam: 1,
        staleTime: 1000 * 60 * 5, 
    });

    const updateSearch = (newSearch: string) => {
        setParams({ search: newSearch, page: 1 });
    };

    const updatePage = (newPage: number) => {
        setParams({ page: newPage });
    };

    const updateLimit = (newLimit: number) => {
        setParams({ limit: newLimit, page: 1 });
    };

    return {
      
        articles: articlesQuery.data?.pages.flatMap((page) => page.articles) || [],
        pagination:
            articlesQuery.data?.pages[articlesQuery.data.pages.length - 1]
                ?.pagination,

        // Loading states
        articlesLoading: articlesQuery.isLoading,
        articlesError: articlesQuery.error,
        isFetchingNextPage: articlesQuery.isFetchingNextPage,

        // Pagination actions
        fetchNextPage: articlesQuery.fetchNextPage,
        hasNextPage: articlesQuery.hasNextPage,

        // Params (read-only)
        search,
        page,
        limit,

        // Setters (individual updates)
        setSearch: updateSearch,
        setPage: updatePage,
        setLimit: updateLimit,

        // Bulk param updates
        setParams,
    };
}