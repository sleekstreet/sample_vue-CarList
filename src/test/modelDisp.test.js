import Vue from 'vue';
import jsdom from 'jsdom';
import * as modelMenu from '../components/ModelSideBar';

const test1 = [
    {
      year: '2015',
      make: 'BMW',
      model: '3 Series',
      trim: '328i xDrive',
      style: 'AWD 328i xDrive 4dr Sedan'
    },
    {
      year: '2015',
      make: 'BMW',
      model: 'X4',
      trim: 'xDrive28i',
      style: 'AWD xDrive28i 4dr SUV'
    },
    {
      year: '2014',
      make: 'Ram',
      model: 'ProMaster Cutaway Chassis',
      trim: '3500 159 WB',
      style: '3500 159 WB 2dr Extended Cutaway Chassis'
    },
    {
      year: '2014',
      make: 'Chevrolet',
      model: 'Corvette Stingray',
      trim: 'Z51',
      style: 'Z51 2dr Coupe w/2LT'
    }
  ],
  test2 = [
    {
      year: '2014',
      make: 'Ford',
      model: 'Fiesta',
      trim: 'S',
      style: 'S 4dr Sedan'
    },
    {
      year: '2014',
      make: 'Chevrolet',
      model: 'Silverado 2500HD',
      trim: 'LTZ',
      style: '4x4 LTZ 4dr Crew Cab LB'
    },
    {
      year: '2014',
      make: 'Ram',
      model: 'Pickup 3500',
      trim: 'Lone Star',
      style: '4x4 Lone Star 4dr Crew Cab 8 ft. LB Pick'
    },
    {
      year: '2014',
      make: 'Ram',
      model: 'Chassis 3500',
      trim: 'Laramie',
      style: '4x4 Laramie 4dr Crew Cab 172.4 in. WB DR'
    }
  ],
  test3 = [];
function LoadComponent(component, propsData){
   const modelComponent = Vue.extend(component),
      NewModelComp = new modelComponent({
        propsData:propsData;
      }).$mount;
  return newModelComp.$el.textContent;
} 
describe('Model Component Tests', () => {
  test('1st Test', () => {
    

    expect(LoadComponent(modelMenu,{
      inventory:test1
    })).toEqual([
      '3 Series',
      'X4',
      'ProMaster Cutaway Chassis',
      'Corvette Stingray'
    ]);
  });
  test('2nd Test', () => {
    expect(options).toEqual([]);
  });
});
