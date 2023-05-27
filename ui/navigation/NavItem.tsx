import Link from 'next/link';
import clsx from '@/lib/utils/clsx'

export default function NavItem({
  item,
  slug,
}: {
  item: {
    name: string;
    slug: string;
  };
  slug: string;
}) {
  const isActive = item.slug === slug;

  return (
    <Link
      href={`/${item.slug}`}
      className={clsx(
        'block px-3 py-4 border border-transparent text-base font-semibold hover:text-teal-600 lg:py-2 transition-all duration-300 ease-in-out',
        isActive ? 'text-teal-700 border-b-2 border-b-teal-700' : 'text-teal-800',
      )}
    >
      {item.name}
    </Link>
  );
}