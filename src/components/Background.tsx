import type { PropsWithChildren } from "react";

export function Background({ children }: PropsWithChildren) {
  return (
    <div className="background-root">
      <div className="background-content">{children}</div>
    </div>
  );
}

