const ErrorBox = ({ message }: { message: string }) => (
  <div className="p-4 bg-red-50 text-red-600 rounded-lg">
    {message}
  </div>
);

export default ErrorBox;
