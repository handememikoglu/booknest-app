import { Card, CardContent, CardHeader } from "./ui/card";


export default function Library({book}) {

  return(
    <Card className="flex flex-row items-center justify-between p-4">
      <div className="flex gap-2 items-center">
        <div className="flex flex-col gap-1">
          <CardHeader>
            <h2>{book.title}</h2>
          </CardHeader>
          <CardContent>
            <p>{book.author}</p>
            <p>{book.type}</p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
