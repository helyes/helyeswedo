# Yuka and Andras RSVP

Yuka and Andras RSVP website

## Install

**Clone repository**

```
git clone https://github.com/helyes/helyeswedo.git
cd helyeswedo
yarn install
```

## Making changes

**Go to project folder then checkout new branch**
```
cd helyeswedo
git checkout -b my-new-update
```
Update files
```
git add . 
git commit -m"What has changed"
git push
```

**Live edit**

The below command will open the site on a new window and update it whenever a file has been changed. 
```
yarn run blendid
```
Servers unmodified -no compression, versioning etc - files from /public folder.

**Production build**

Creates versioned and optimized files in public folder.
```
yarn run blendid -- build
```

**Serve prod code (public folder) on localhost**

_First time_
```
cd public
python3  -m http.server 1337
```

_Afterwards_
```
cd ../ && cd public && python3 -m http.server 1337
```


**Going live**

The below will run production build then pushes /public folder content to the repsitory's gh-pages branch
```
yarn run blendid -- gh-pages
```

Check below if commiter = null issues arise when running gh-pages task:

```
/node_modules/gift/lib/commit.js:145
      ref1 = /^.+? (.*) (\d+) .*$/.exec(line), m = ref1[0], actor = ref1[1], epoch = ref1[2];
                                                       ^

TypeError: Cannot read property '0' of null
    at Function.module.exports.Commit.actor (/helyeswedo/node_modules/gift/lib/commit.js:145:56)
    at Function.module.exports.Commit.parse_commits (/helyeswedo/node_modules/gift/lib/commit.js:111:21)
    at /helyeswedo/node_modules/gift/lib/commit.js:55:39
    at ChildProcess.exithandler (child_process.js:267:7)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at maybeClose (internal/child_process.js:925:16)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:209:5)
✨  Done in 39.85s.
```

```
https://github.com/shinnn/gulp-gh-pages/issues/116#issuecomment-342982109

cd node_modules/gulp-gh-pages/
npm install --save gift@0.10.2
cd ../../
gulp deploy
``` 
