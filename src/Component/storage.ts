(window as any).requestFileSystem = (window as any).requestFileSystem || (window as any).webkitRequestFileSystem;
const onError = (error: any) => {
  console.error(error);
};

const removeFile = async (fs: any, filename: string) => {
  return new Promise((resolve, reject) => {
    fs.root.getFile(
      filename,
      {create: true},
      (fileEntry: any) => {
        fileEntry.remove(
          function () {
            resolve();
          },
          (error: any) => {
            console.error(error);
            reject(error);
          }
        );
      },
      (error: any) => {
        console.error(error);
        reject(error);
      }
    );
  });
};

const saveJSONFile = async (fs: any, filename: string, data: any) => {
  await removeFile(fs, filename);

  return new Promise((resolve, reject) => {
    fs.root.getFile(
      filename,
      {create: true},
      (fileEntry: any) => {
        fileEntry.createWriter(
          (fileWriter: any) => {
            fileWriter.onwriteend = (event: any) => {
              resolve();
            };

            fileWriter.onerror = (error: any) => {
              console.error(error);
              reject(error);
            };

            fileWriter.write(new Blob([JSON.stringify(data)], {type: 'application/json'}));
          },
          (error: any) => {
            console.error(error);
            reject(error);
          }
        );
      },
      (error: any) => {
        console.error(error);
        reject(error);
      }
    );
  });
};

const getJSONFile = async (fs: any, filename: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    fs.root.getFile(
      filename,
      {create: true},
      (fileEntry: any) => {
        fileEntry.file(async (file: Blob) => {
          const reader = new FileReader();

          reader.addEventListener('loadend', (event) => {
            if (null === event.currentTarget) reject('no target');
            if (null === (event.target as FileReader).result) reject('no result');

            try {
              const sprites = JSON.parse((event.target as FileReader).result as string);
              resolve(sprites);
            } catch (error) {
              reject(error);
            }
          });

          reader.readAsText(file);
        });
      },
      (error: any) => {
        console.error(error);
        reject(error);
      }
    );
  });
};

const requestStorage = async () => {
  return new Promise((resolve, reject) => {
    (window as any).requestFileSystem((window as any).TEMPORARY, 1024 * 1024 * 200, resolve, (error: any) => {
      console.error(error);
      reject(error);
    });
  });
};

export {requestStorage, getJSONFile, saveJSONFile};
