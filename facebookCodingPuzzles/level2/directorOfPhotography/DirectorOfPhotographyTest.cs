namespace Practice.FacebookCodingPuzzles.Level2
{
    using NUnit.Framework;

    public class DirectorOfPhotographyTest
    {
        [Test]
        public void Example1()
        {
            // A
            var N = 5;
            var C = "APABA";
            var X = 1;
            var Y = 2;

            var expected = 1;

            // A
            var result = DirectorOfPhotography.GetArtisticPhotographCount(N, C, X, Y);

            // A
            Assert.AreEqual(expected, result);
        }

        [Test]
        public void Example2()
        {
            // A
            var N = 5;
            var C = "APABA";
            var X = 1;
            var Y = 2;

            var expected = 1;

            // A
            var result = DirectorOfPhotography.GetArtisticPhotographCount(N, C, X, Y);

            // A
            Assert.AreEqual(expected, result);
        }

        [Test]
        public void Example3()
        {
            // A
            var N = 8;
            var C = ".PBAAP.B";
            var X = 1;
            var Y = 3;

            var expected = 3;

            // A
            var result = DirectorOfPhotography.GetArtisticPhotographCount(N, C, X, Y);

            // A
            Assert.AreEqual(expected, result);
        }

        [Test]
        public void MaxRange()
        {
            // A
            var N = 15;
            var C = "ABA..........PA";
            var X = 1;
            var Y = 15;

            var expected = 1;

            // A
            var result = DirectorOfPhotography.GetArtisticPhotographCount(N, C, X, Y);

            // A
            Assert.AreEqual(expected, result);
        }

        [Test]
        public void TooShortInputShouldReturnZero()
        {
            // A
            var N = 1;
            var C = ".";
            var X = 1;
            var Y = 1;

            var expected = 0;

            // A
            var result = DirectorOfPhotography.GetArtisticPhotographCount(N, C, X, Y);

            // A
            Assert.AreEqual(expected, result);
        }
    }
}