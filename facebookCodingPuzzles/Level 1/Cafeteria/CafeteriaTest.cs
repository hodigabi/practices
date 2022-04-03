using NUnit.Framework;

namespace Tests
{
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
            var result = Cafeteria.getMaxAdditionalDinersCount(N, K, M, S);

            // Assert
            Assert.AreEqual(expected, result);
        }
    }
}