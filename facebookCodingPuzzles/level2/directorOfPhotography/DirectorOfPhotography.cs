namespace Practice.FacebookCodingPuzzles.Level2
{
    internal static class DirectorOfPhotography
    {
        public static long GetArtisticPhotographCount(int N, string C, int X, int Y)
        {
            // early exit
            if(N < 3 || (2*X-1) >= N) return 0;

            // the idea is to go through C character by character
            // When a given char is an 'A' then calculate the number of
            // artistic photos created by the given 'A'
            // to be able to do so only the number of 'P' and 'B' chars
            // within the range defined by 'X' and 'Y' need to be calculated
            // note: nearly each char's value will be evaluated 3 times
            var result = 0;

            // the size of char range defined by the inputs
            var side = Y-X+1;

            // counters of 'P' and 'B' chars located left and right to the given 'A'
            var leftP = 0;
            var rightP = 0;
            var leftB = 0;
            var rightB = 0;

            char c;

            // before starting iterating through C we need to calculate
            // how may 'B' and 'P' chars are ahead of the first 'A'
            // leaving the last char out because it will be checked at the next phase
            var j = 2*X;
            while (j < N && j-2*X < side-1)
            {
                c = C[j];
                if (c == 'P') rightP++;
                if (c == 'B') rightB++;
                j++;
            }

            for(var i=X; i+X<N; i++)
            {
                // calculate 'B's and 'P's left to the current char
                c = C[i-X];
                if (c == 'P') leftP++;
                if (c == 'B') leftB++;

                // same on the right side
                if (i+Y < N)
                {
                    c = C[i+Y];
                    if (c == 'P') rightP++;
                    if (c == 'B') rightB++;
                }

                // only modify result when the given char is an 'A'
                if (C[i] == 'A')
                {
                    result += leftP * rightB;
                    result += leftB * rightP;
                }

                // decrease the number of 'P's and 'B's on the left
                // when those are out of range
                if (i-Y >= 0)
                {
                    c = C[i-Y];
                    if (c == 'P') leftP--;
                    if (c == 'B') leftB--;
                }

                // same for the right side;
                // there is deliberately no condition here
                c = C[i+X];
                if (c == 'P') rightP--;
                if (c == 'B') rightB--;
            }

            return result;
        }
    }
}