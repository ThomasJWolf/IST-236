import News from "../components/News/News";
import { NEWS_ITEMS } from "../data/dummy_data";

function USNewsScreen() {
  const type = "US";
  const displayedNews = NEWS_ITEMS.filter((NewsItem) => {
    return NewsItem.type === type;
  });

  return <News items={displayedNews} />;
}

export default USNewsScreen;
