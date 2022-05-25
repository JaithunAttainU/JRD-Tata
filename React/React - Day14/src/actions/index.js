//action is an object which has 'type' and 'payload'

//Action Creators
export const selectSongAction = (song) => {
  return {
    type: 'SELECT_SONG',
    payload: song //{title:'sedfrv', duration: 3}
  }
}