import { createStore } from "redux";

const initialData = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "http://hildegard.org",
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "http://anastasia.net",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "http://ramiro.info",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "http://kale.biz",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "http://demarco.info",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
    website: "http://ola.org",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    email: "Telly.Hoeger@billy.biz",
    phone: "210.067.6132",
    website: "http://elvis.io",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    email: "Sherwood@rosamond.me",
    phone: "586.493.6943 x140",
    website: "http://jacynthe.com",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    email: "Chaim_McDermott@dana.io",
    phone: "(775)976-6794 x41206",
    website: "http://conrad.com",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    email: "Rey.Padberg@karina.biz",
    phone: "024-648-3804",
    website: "http://ambrose.net",
  },
];

const initialState = {
  data: initialData,
};
const UPDATE_USER_DATA = "UPDATE_USER_DATA";
const updateUserData = (updatedData) => ({
  type: UPDATE_USER_DATA,
  payload: updatedData,
});
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DATA:
      const updatedState = {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
      console.log("Updated State:", updatedState);
      return updatedState;
    default:
      return state;
  }
};

const store = createStore(reducer);

export { store, updateUserData };
