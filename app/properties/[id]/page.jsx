'use client';
import {
   useRouter,
   useParams,
   useSearchParams,
   usePathname,
} from 'next/navigation';

const PropertyPage = () => {
   const router = useRouter();
   const params = useParams();
   const searchParams = useSearchParams();
   const pathname = usePathname();
   console.log(pathname);
   return <div>Proper Page</div>;
};

export default PropertyPage;
