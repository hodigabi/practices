namespace Practice.FacebookCodingPuzzles.Level1
{
    internal static class Kaitenzushi
    {
        public static int GetMaximumEatenDishCount(int N, int[] D, int K)
        {
            var result = 0;

            // the hashtable stores the 'recently' eaten dishes
            var hashTable = new HashSet<int>();

            // the queue is used to keep track of what needs to be removed
            // this could be eliminated using a Dictionary<int, int> instead of the HashSet
            // resulting reduced memory complexity, however, in that case the removal
            // from the hashtable would be quite time consuming
            var q = new Queue<int>(K+1);

            for (int i=0; i<N; i++)
            {
                var meal = D[i];
                if (!hashTable.Contains(meal))
                {
                    result++;
                    q.Enqueue(meal);
                    hashTable.Add(meal);

                    if (q.Count > K)
                    {
                        hashTable.Remove(q.Dequeue());
                    }
                }
            }

            return result;
        }
    }
}