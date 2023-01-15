import { createSlice } from "@reduxjs/toolkit";

const spotifySlice = createSlice({
    name: "spotify",
    initialState: { playlist: [], songs: [], artists: [], markets: [], query: "rock", queryType: "", loading: false, filteredSongs: [], filterOn: false },
    reducers: {
        setPlaylist(state, action) {
            state.playlist = action.payload.playlist
        },
        setSongs(state, action) {
            state.songs = action.payload.songs
        },
        setQuery(state, action) {
            state.query = action.payload.query
        },
        setArtists(state, action) {
            state.artists = action.payload.artists
        },
        setMarkets(state, action) {
            state.markets = action.payload.markets
        },
        setLoading(state, action) {
            state.loading = action.payload.loading
        },
        setFilteredSongs(state, action) {
            state.filteredSongs = action.payload.filteredSongs
        },
        setFilterOn(state, action) {
            state.filterOn = action.payload.filterOn
        },

    }
})

export const spotifyActions = spotifySlice.actions
export default spotifySlice