export interface Ingredient {
    id: string;
    name: string;
    vietnameseName: string;
    description: string;
    image: string;
    color: string;
}

export const ingredientsData: Ingredient[] = [
    {
        id: "lavender",
        name: "True Lavender",
        vietnameseName: "Oải Hương Nguyên Bản",
        description: "Được thu hoạch từ những cánh đồng tím biếc tại Provence, mang lại sự thư thái tuyệt đối cho tâm hồn.",
        image: "https://images.unsplash.com/photo-1498842812179-c81beecf902c?q=80&w=2670&auto=format&fit=crop",
        color: "#E6E6FA"
    },
    {
        id: "sandalwood",
        name: "Mysore Sandalwood",
        vietnameseName: "Đàn Hương Mysore",
        description: "Nốt hương gỗ trầm ấm, quý phái, giúp cân bằng cảm xúc và tạo không gian thiền định sâu lắng.",
        image: "https://images.unsplash.com/photo-1610366398516-46da9dec5931?q=80&w=2670&auto=format&fit=crop",
        color: "#C2B280"
    },
    {
        id: "jasmine",
        name: "Royal Jasmine",
        vietnameseName: "Hoa Nhài Hoàng Gia",
        description: "Hương thơm thanh khiết, ngọt ngào, được hái vào lúc bình minh để giữ trọn vẹn tinh túy.",
        image: "https://images.unsplash.com/photo-1596525741368-4f8e83344d96?q=80&w=2670&auto=format&fit=crop",
        color: "#F8F8FF"
    },
    {
        id: "bergamot",
        name: "Bergamot",
        vietnameseName: "Cam Bergamot",
        description: "Hương cam chanh tươi mát, rạng rỡ, đánh thức mọi giác quan và khơi dậy nguồn năng lượng tích cực.",
        image: "https://images.unsplash.com/photo-1615485925763-8678628890a3?q=80&w=2670&auto=format&fit=crop",
        color: "#98FF98"
    }
];
