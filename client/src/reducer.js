/**
 * Created by haita on 2018/1/8 0008.
 */
import { combineReducers } from 'redux';
import { music } from './redux/player.redux';
import { repertoire } from './redux/repertoire.redux';
import { songsListDetail } from './redux/song-list-detail.redux'
import { comment } from './redux/comment.redux'
import { album } from './redux/album.redux'
const rootReducer = combineReducers({
    music,
    repertoire,
    songsListDetail,
    comment,
    album
});
export default rootReducer