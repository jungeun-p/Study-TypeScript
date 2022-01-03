interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
    
}

// interface ProductDetail{
//     id: number;
//     name: string;
//     price: number;
// }

type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
type ShoppingItem_two = Omit<Product, 'stock'>

// 클릭 후 상세 정보 페이지 API 함수
function displayProductDetail(shoppingItem: ShoppingItem) {

}

