const routeLoaders = {
  "/about": () => import("../pages/About"),
  "/services": () => import("../pages/Services"),
  "/products": () => import("../pages/Products"),
  "/fleet": () => import("../pages/Fleet"),
  "/careers": () => import("../pages/Careers"),
  "/contact": () => import("../pages/Contact"),
  "/locations": () => import("../pages/Locations"),
};

const pendingRoutes = new Map();

const loaderFor = (to) => {
  if (!to || typeof to !== "string") return null;
  const path = to.split(/[?#]/)[0];
  if (path.startsWith("/products/")) return () => import("../pages/ProductDetail");
  return routeLoaders[path] || null;
};

export const preloadRoute = (to) => {
  const loader = loaderFor(to);
  if (!loader || pendingRoutes.has(to)) return;

  const request = loader().catch(() => {
    pendingRoutes.delete(to);
  });
  pendingRoutes.set(to, request);
};
