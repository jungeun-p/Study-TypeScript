interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
    
}

// interface ProductDetail{
//     id: number;
//     name: string;
//     price: number;
// }

type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
type ShoppingItem_two = Omit<Product, 'stock'>

// 2. 클릭 후 상세 정보 페이지 API 함수
function displayProductDetail(shoppingItem: ShoppingItem) {

}


interface UpdateProduct{
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

type updateProduct = Partial<Product>
// 3. 특정 상품 정보를 업데이트하는 함수 
function updateProductItem(productItem: updateProduct){

}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string; 
}

type userProfileUpdate = Partial<UserProfile>

// interface UserProfileUpdate {
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string; 
// }

// // #1
// interface UserProfileUpdate {
//     username?: UserProfile['username'];
//     email?: UserProfile['email'];
//     profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// // #2
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
//     // 반복문을 이용한 유틸리티 타입 구현
// }

// // #3
// type UserProfileUpdate = {
//     [p in keyof UserProfile]?: UserProfile[p]
//     // UserProfile 국한되어 있는 형태. 
// }

// #4 타입을 넘겨 받을 수 있는 형태. 
type Subset<T> = {
    [p in keyof T]?: T[p]
}