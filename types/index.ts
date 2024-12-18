import { PostgrestError } from '@supabase/supabase-js';

export type PathnameProps = {
  pathname: string;
};

export type EnetertainmentProps = {
  created_at: string;
  id: number;
  image: string | null;
  isTrending: boolean | null;
  name: string | null;
  rating: string | null;
  trendingImage: string | null;
  type: string | null;
  year: number | null;
};

export type GetEntertainments = Promise<
  | {
      error: PostgrestError;
      entertainments?: undefined;
    }
  | {
      entertainments: EnetertainmentProps[];
      error?: undefined;
    }
>;

// export type GetEntertainments<T extends string> = Promise<
//   | {
//       error: PostgrestError;
//       data: { [K in T]?: undefined };
//     }
//   | {
//       data: { [K in T]: EnetertainmentProps[] };
//       error?: undefined;
//     }
// >;
