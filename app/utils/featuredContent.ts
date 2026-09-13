import type { CarouselSlide } from '~/components/Carosello.vue'
import { newsArticles } from '~/data/news'
import { newsArticles as eventArticles } from '~/data/eventi'
import { newsArticles as campaignArticles } from '~/data/campagne'

interface FeaturableArticle {
  slug: string
  title: string
  description: string
  imageUrl: string
  publishedAt: string
  featured?: boolean
}

interface FeaturedSource {
  articles: FeaturableArticle[]
  basePath: string
  ctaLabel: string
}

const sources: FeaturedSource[] = [
  { articles: newsArticles, basePath: '/news', ctaLabel: 'Leggi la news' },
  { articles: eventArticles, basePath: '/eventi', ctaLabel: "Scopri l'evento" },
  { articles: campaignArticles, basePath: '/campagne', ctaLabel: 'Scopri la campagna' },
]

export function getFeaturedCarouselSlides(): CarouselSlide[] {
  return sources
    .flatMap(({ articles, basePath, ctaLabel }) =>
      articles
        .filter((article) => article.featured)
        .map((article) => ({
          title: article.title,
          description: article.description,
          imageUrl: article.imageUrl,
          publishedAt: article.publishedAt,
          cta: {
            label: ctaLabel,
            url: `${basePath}/${article.slug}`,
          },
        })),
    )
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .map(({ publishedAt: _publishedAt, ...slide }) => slide)
}
