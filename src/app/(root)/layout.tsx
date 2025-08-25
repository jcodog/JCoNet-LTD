const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <main className="flex flex-1 flex-col no-scrollbar">{children}</main>;
};

export default RootLayout;
