import { ref, onMounted, onUnmounted } from "vue";

/**
 * Tracks whether the window width is greater than or equal to the breakpoint.
 * @param breakpoint Width in pixels (default 1024)
 */
export function useIsDesktop(breakpoint: number = 1024) {
  const isDesktop = ref(false);

  const checkWidth = () => {
    isDesktop.value = window.innerWidth >= breakpoint;
  };

  onMounted(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", checkWidth);
  });

  return isDesktop;
}
