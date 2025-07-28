import Navigation from "@/components/navigation";
import { ModalProvider } from "@/features/modals";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: Layout,
});

function Layout() {
  return (
    <ModalProvider>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </ModalProvider>
  );
}
