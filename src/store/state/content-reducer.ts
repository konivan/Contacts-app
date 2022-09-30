import { actionTypes, StateItem, TypeActionState } from './types';

const initialState: StateItem[] = [
  {
    name: "Кондратьев Иван Андреевич",
    birth_date: '12.09.1990',
    phone: '79774641337',
    position: 'директор',
    _id: 0,
  },
  {
    name: "Ивановский Никита Русланович",
    birth_date: '10.10.1993',
    phone: '89015907652',
    position: 'руководитель подразделения',
    _id: 1,
  },
  {
    name: "Малаев Никита Георгевич",
    birth_date: '01.01.1970',
    phone: '89060567688',
    position: 'руководитель подразделения',
    _id: 2,
  },
  {
    name: "Пименова Светлана Викторовна",
    birth_date: '10.08.2001',
    phone: '89035671976',
    position: 'контролер',
    _id: 3,
  },
  {
    name: "Сиянский Александр Анотольевич",
    birth_date: '12.09.1992',
    phone: '89057816281',
    position: 'рабочий',
    _id: 4,
  },
  {
    name: "Иванов Иван Иванович",
    birth_date: '10.08.1994',
    phone: '89097881723',
    position: 'контролер',
    _id: 5,
  },
  {
    name: "Дроздов Артём Михайлович",
    birth_date: '12.09.2001',
    phone: '89021857920',
    position: 'рабочий',
    _id: 6,
  },
  {
    name: "Грачёв Роман Артёмович",
    birth_date: '12.09.1999',
    phone: '89060182799',
    position: 'рабочий',
    _id: 7,
  },
  {
    name: "Рябова Анастасия Валерьевна",
    birth_date: '12.09.1992',
    phone: '89017296429',
    position: 'рабочий',
    _id: 8,
  },
  {
    name: "Михайлова Елена Павловна",
    birth_date: '12.09.1995',
    phone: '89061957295',
    position: 'рабочий',
    _id: 9,
  },
  {
    name: "Глушко Ольга Дмитриевна",
    birth_date: '12.09.2002',
    phone: '89082649166',
    position: 'рабочий',
    _id: 10,
  },
  {
    name: "Галета Игорь Владимирович",
    birth_date: '12.09.1997',
    phone: '89051859133',
    position: 'рабочий',
    _id: 11,
  },
  {
    name: "Ткаченко Мария Борисовна",
    birth_date: '10.08.1985',
    phone: '89082641855',
    position: 'контролер',
    _id: 12,
  },
  {
    name: "Васильев Александр Алексеевич",
    birth_date: '10.08.2000',
    phone: '89060321966',
    position: 'контролер',
    _id: 13,
  },
];


export const contentReducer = (state = initialState, action: TypeActionState) => {
  switch (action.type) {
    case actionTypes.STATE_DELETE_ITEM: {
      return state.filter((item) => item._id !== action.payload);
    }
    case actionTypes.STATE_ADD_ITEM: {
      const state1 = [...state];
      let { name, bd, phone, position } = action.payload;

      let newItem = {
        name: name,
        birth_date: bd,
        phone: phone,
        position: position,
        _id: state.length,
      }
      state1.push(newItem);
      return state1;
    }
    case actionTypes.STATE_CHANGE_ITEM: {
      const state1 = [...state];
      let { name, id, bd, phone, position} = action.payload;
      state1[id].name = name;
      state1[id].birth_date = bd;
      state1[id].phone = phone;
      state1[id].position = position;
      return state1;
    }
    case actionTypes.SEARCH_BY_POSITION_AND_DIVISION: {
      if (action.payload !== '') {
        return state.filter((state) =>
          state.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      } else return state;
    }
    default:
      return state;
  }
}