
  export const saveState = async (state) => {
    return new Promise((resolve, reject) => {
             localStorage.setItem('state', state);
             resolve(state)
             console.log('maine kr lia')
    })
   
  };

  export const loadState = async () => {
    return new Promise((resolve, reject) => {
            const savedData =  localStorage.getItem('state');
            console.log(savedData,'main hu yha ruko')
            if (savedData !== null) {
              resolve(savedData)
            }
    })
    
  };
