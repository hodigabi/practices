namespace Practice.FacebookCodingPuzzles.Level1
{
    using NUnit.Framework;

    public class KaitenzushiTest
    {
        [Test]
        public void Example1()
        {
            // Arrange
            var N = 6;
            var D = new int[] {1, 2, 3, 3, 2, 1};
            var K = 1;

            var expected = 5;

            // Act
            var actual = Kaitenzushi.GetMaximumEatenDishCount(N, D, K);

            // Assert
            Assert.AreEqual(expected, actual);
        }

        [Test]
        public void Example2()
        {
            // Arrange
            var N = 6;
            var D = new int[] {1, 2, 3, 3, 2, 1};
            var K = 2;

            var expected = 4;

            // Act
            var actual = Kaitenzushi.GetMaximumEatenDishCount(N, D, K);

            // Assert
            Assert.AreEqual(expected, actual);
        }

        [Test]
        public void Example3()
        {
            // Arrange
            var N = 7;
            var D = new int[] {1, 2, 1, 2, 1, 2, 1};
            var K = 2;

            var expected = 4;

            // Act
            var actual = Kaitenzushi.GetMaximumEatenDishCount(N, D, K);

            // Assert
            Assert.AreEqual(expected, actual);
        }
    }
}