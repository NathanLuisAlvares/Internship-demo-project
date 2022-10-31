import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: {
        People:[
          {
            UserName: "Nathan",
            FullName: "Nathan Alvares",
            EmailId: "abc@gmail.com",
            PhNo: "123",
            UserId: "",
            Designation: "Admin",
            Password: "nathan123"
          },
          {
            UserName: "Noah",
            FullName: "Noah Alvares",
            EmailId: "xyz@gmail.com",
            PhNo: "456",
            UserId: "U001",
            Designation: "User",
            Password: "noah123"
          }
        ],
        notes: [],
        timestamps: []
    },
    mutations: {
      ADD_PEOPLE (state, payload) {
        //state.user = user
        let newPeople = payload
        state.People.push(newPeople)
        console.log(state.People)
      },
      ADD_NOTE (state,payload) {
        let newNote = payload;
        state.notes.push(newNote);
      },
      ADD_TIMESTAMP (state,payload) {
        let newTimeStamp = payload;
        state.timestamps.push(newTimeStamp);
      }
    },
    actions: {
      addPeople ( context, payload ){
        console.log("inside mutation")

        context.commit('ADD_PEOPLE', payload)
      },
      addNote(context, payload){
        context.commit('ADD_NOTE', payload)
      },
      addTimestamp(context, payload){
        context.commit('ADD_TIMESTAMP', payload)
      }
    },
    getters: {
      getPeople: state => state.People,
      getPeopleCount: state => state.People.length,
      getNotes: state => state.notes,
      getTimestamps: state => state.timestamps,
      getNoteCount: state => state.notes.length
    },
    modules: {
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
