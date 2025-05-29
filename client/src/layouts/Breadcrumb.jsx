import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import Container from "@/layouts/Container";

// TODO: update this to list more than 2 listed links

function Breadcrumb() {
  const [title, subTitle] = useBreadcrumbs();

  return (
    <div className="bg-gray relative z-1 text-white">
      <Container className="space-y-4 pt-8 pb-16">
        {title && subTitle && (
          <>
            <div className="flex gap-2">
              <span className="bg-green min-h-full min-w-2"></span>
              <h1 className="font-medium">{title}</h1>
            </div>
            <h2 className="text-4xl font-bold">{subTitle}</h2>
          </>
        )}
        {!subTitle && <h1 className="text-6xl font-bold">{title}</h1>}
      </Container>
    </div>
  );
}

export default Breadcrumb;
