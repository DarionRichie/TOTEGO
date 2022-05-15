// for file operation
// write pri -> keystore file
import * as fs from "fs"

export function write_to_file(content : string, path : string) : void {
  fs.writeFile(path, content, err => {
    if (err) {
      console.log(err);
      console.log("write Content err !");
    }
  })
}