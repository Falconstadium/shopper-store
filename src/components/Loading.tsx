const Loading = () => {
  return (
    // <!-- From Uiverse.io by clarencedion -->
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative">
        <div className="relative h-32 w-32">
          <div
            className="absolute h-full w-full animate-spin rounded-full border-[3px] border-gray-100/10 border-r-indigo-500 border-b-indigo-500"
            style={{ animationDuration: "3s" }}
          ></div>

          <div
            className="absolute h-full w-full animate-spin rounded-full border-[3px] border-gray-100/10 border-t-indigo-500"
            style={{
              animationDuration: "2s",
              animationDirection: "reverse",
            }}
          ></div>
        </div>

        <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-indigo-500/10 via-transparent to-indigo-500/5 blur-sm"></div>
      </div>
    </div>
  );
};

export default Loading;
