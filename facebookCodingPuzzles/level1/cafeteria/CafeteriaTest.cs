namespace Practice.FacebookCodingPuzzles.Level1
{
    using NUnit.Framework;

    public class CafeteriaTest
    {
        [Test]
        public void Example1()
        {
            // Arrange
            var N = 10L;
            var K = 1L;
            var M = 2;
            var S = new long[] {2L, 6L};

            var expected = 3;

            // Act
            var result = Cafeteria.GetMaxAdditionalDinersCount(N, K, M, S);

            // Assert
            Assert.AreEqual(expected, result);
        }

        [Test]
        public void Example2()
        {
            // Arrange
            var N = 15L;
            var K = 2L;
            var M = 3;
            var S = new long[] {11L, 6L, 14L};

            var expected = 1;

            // Act
            var result = Cafeteria.GetMaxAdditionalDinersCount(N, K, M, S);

            // Assert
            Assert.AreEqual(expected, result);
        }
    }
}