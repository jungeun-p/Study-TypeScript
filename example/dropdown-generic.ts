// interface Email{
//     value:string;
//     selected:boolean;
// }

// interface ProductNum{
//     value: number;
//     selected:boolean;
// }

interface DropdownItem<T>{
    value: T;
    selected: boolean;
}
const emails: DropdownItem<string>[] = [
    { value: 'naver.com', selected: true },
    { value: 'gmail.com', selected: false },
    { value: 'hanmail.net', selected: false },
  ];
  
  const numberOfProducts: DropdownItem<number>[] = [
    { value: 1, selected: true },
    { value: 2, selected: false },
    { value: 3, selected: false },
  ];
  
  // dropdown option값 생성
  function createDropdownItem<T>(item: DropdownItem<T>){
    const option = document.createElement('option');
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option;
  }
  
  // NOTE: 이메일 드롭 다운 아이템 추가
  emails.forEach(function (email) {
    const item = createDropdownItem<string>(email);
    const selectTag = document.querySelector('#email-dropdown');
    selectTag.appendChild(item);
  });

  numberOfProducts.forEach(function(product){
      const item = createDropdownItem(product);
  })