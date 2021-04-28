import { Articles } from './articles'
import { Comments } from './comments'
import { Users } from './users'
import { Followers } from './followers'
import { Listings } from './listings'
import { PodcastEpisodes } from './podcast-episodes'
import { Tags } from './tags'
import { Videos } from './videos'
import { Webhooks } from './webhooks' 
import { applyMixins } from './utils'
import { Base } from './base'

class Mapstory extends Base {}
interface Mapstory extends Articles, Comments, Users, Followers, Listings, PodcastEpisodes, Tags, Videos, Webhooks {}
applyMixins(Mapstory, [Articles, Comments, Users, Followers, Listings, PodcastEpisodes, Tags, Videos, Webhooks]);

export default Mapstory
