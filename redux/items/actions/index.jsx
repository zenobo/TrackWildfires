// Actions
export const PROCESS_RAW_DATA = 'Process Raw Data';
export const SET_FIRE_NAME = 'Set Fire Name';
export const SET_FIRE_DETAILS = 'Set Fire Details';

// Methods
export const ProcessRawData = () => {
  return (dispatch, getState) => {

    let { fires } = getState().items;

    // Find total
    let total = 0;
    let labels = [];
    let sizes = [];

    fires.map((val, index)=>{
      total = total + parseInt(val.size);
      // Generate labels and sizes
      if(index < 9){
        labels.push(val.name);
        sizes.push(val.size);
      }
    })

    return dispatch({
      type: PROCESS_RAW_DATA,
      payload: {
        total,
        labels,
        sizes
      }
    })
  }
};

export const SetFireDetails = (fire) => {
  return (dispatch, getState) => {
    const { fires } = getState().items;
    const fireIndex = fires.findIndex((item, index) => item.name === fire);
    
    return dispatch({
      type: SET_FIRE_DETAILS,
      payload: {
        index: fireIndex,
        fire: fires[fireIndex],
      }
    })
  }
};
