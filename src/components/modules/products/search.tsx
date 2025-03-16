'use client';

// import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchComponent({
  placeholder,
}: {
  placeholder: string;
}) {
  // const [searchQuery, setSearchQuery] = useState(query || '');

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    // console.log(`Searching... ${term}`);

    // console.log(term);
    const params = new URLSearchParams(searchParams);

    params.set('page', '1');

    // console.log(params);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        // placeholder="Search products..."
        className="pl-8 shadow-none"
        // value={searchQuery}
        // onChange={(e) => handleSearch(e.target.value)}
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}
