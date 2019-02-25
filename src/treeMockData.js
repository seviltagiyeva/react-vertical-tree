export const departments = [
  { id: 1, name: 'company', parent: null, children: [
    { id: 2 , name: 'company2' , parent: {id: 1} ,  departmenttype: { id: 1 }, children: []},
    { id: 3 , name: 'company3' , parent: {id: 1} ,  departmenttype: { id: 2 }, children: []},
    { id: 4 , name: 'compsany3' , parent: {id: 1} ,  departmenttype: { id: 3 }, children: [
      { id: 9 , name: 'compsdfany3' , parent: {id: 1} ,  departmenttype: { id: 4 }, children: []},
      { id: 10 , name: 'company3' , parent: {id: 1} ,  departmenttype: { id: 5 }, children: [
        { id: 11 , name: 'comssdffdpany3' , parent: {id: 1} ,  departmenttype: { id: 5 }, children: []},
        { id: 12 , name: 'comsdfpany3' , parent: {id: 1} ,  departmenttype: { id: 5 }, children: []},
        { id: 13 , name: 'comdsfpany3' , parent: {id: 1} ,  departmenttype: { id: 5 }, children: []},
      ]},
    ]},
    { id: 5 , name: 'compasdfny3' , parent: {id: 1} ,  departmenttype: { id: 4 }, children: []},
    { id: 6 , name: 'compasdfny3' , parent: {id: 1} ,  departmenttype: { id: 5 }, children: []},
    { id: 7 , name: 'company3' , parent: {id: 1} ,  departmenttype: { id: 2 }, children: []}, 
    { id: 8 , name: 'comp33any3' , parent: {id: 1} ,  departmenttype: { id: 1 }, children: []},
  ]} 
]