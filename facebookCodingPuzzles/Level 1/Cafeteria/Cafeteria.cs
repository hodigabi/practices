namespace Level1
{
    internal static class Cafeteria {
        public static long getMaxAdditionalDinersCount(long N, long K, int M, long[] S) {
            var space = 1 + 2*K;
            var result = 0L;
            var diff = 0L;
            S = S.OrderBy(s => s).ToArray();
            for(int i = 1; i<=S.Length-1; i++)
            {
                diff = S[i] - S[i-1] - 1;
                if(diff >= space)
                {
                    result++;
                    diff -= space;
                    result += diff / (K+1);
                }
            }
            diff = S[0] - 1;
            result += diff / (K+1);

            // when   (i==S.Length)
            diff = N - S[S.Length-1];
            result += diff / (K+1);

            return result;
        }
    }
}