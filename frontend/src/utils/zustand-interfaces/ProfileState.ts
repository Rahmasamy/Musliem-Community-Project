import { User } from '@/types/authTypes';
import { Product } from '../context-interface/productInterface';
export interface ProfileState {
    profile: User | null;
    loading: boolean;
    error: string | null;
    products: Product[];
    getMyProfile: () => Promise<void>;
    updateMyProfile: (profileData: Partial<User>) => Promise<void>;
    delteProfile?: () => Promise<void>;
    createProfile: (data: Partial<User>) => Promise<void>;
    logout: () => void;
    getUserProducts: () => Promise<void>;
    getUserAds: () => Promise<any[]>;
    updateProduct: (id: string, productData: Partial<Product>) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;

}