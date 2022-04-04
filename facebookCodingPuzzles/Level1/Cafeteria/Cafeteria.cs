namespace Practice.FacebookCodingPuzzles.Level1
{
    internal static class Cafeteria {

        public static long GetMaxAdditionalDinersCount(long N, long K, int M, long[] S) {
            // the space needed between two existing diner in order to be able to seat one more diner
            var space = 1 + 2*K;
            var result = 0L;
            var diff = 0L;

            // making S ordered so the for loop can iterate it through correctly
            S = S.OrderBy(s => s).ToArray();

            // ignore the space before the first and after the last diner
            for (var i = 1; i<=S.Length-1; i++)
            {
                // the space between two diners
                diff = S[i] - S[i-1] - 1;

                // if there is enough space to seat at least one new diner
                if(diff >= space)
                {
                    result++;
                    diff -= space;

                    // any additional diner need only K + 1 space
                    result += diff / (K+1);
                }
            }

            // add diner(s) to the left of the first diner
            diff = S[0] - 1;
            result += diff / (K+1);

            // add diner(s) to the right of the last diner
            diff = N - S[S.Length-1];
            result += diff / (K+1);

            return result;
        }
    }
}