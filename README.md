# kottans-backend
## Git and GitHub
I was impressed with easy way of providing information of Git in Udacity course.

## Unix Shell

![](task_unix_shell/image.png)

1. ~ shortcut
2. Linux has a spelling checker
3. grep with pipeline

## Git Collaboration

![](task_git_collaboration/github_collaboration_results_1.png)
![](task_git_collaboration/github_collaboration_results_2.png)

1. purpose of git fetch
2. power of git rebase
3. git fetch

## NodeJS Basics 1

![](node_basic_1/node-basics-1.png)
![](node_basic_1/node-basics-2.png)
![](node_basic_1/node-basics-3.png)

1. Second and third workshops
2. How we can scoff at anything using prototype
3. Pipes

## Memory Management

`- What's going to happen if program reaches maximum limit of stack ?`
If the maximum stack size has been reached, we have a stack overflow and the program receives a Segmentation Fault.

`- What's going to happen if program requests a big (more then 128KB) memory allocation on heap ?`
If there is enough space in the heap to satisfy a memory request, it can be handled by the language runtime without kernel involvement. Otherwise the heap is enlarged via the brk() system call (implementation) to make room for the requested block. 

`- What's the difference between Text and Data memory segments ?`
The data segment holds the contents for static variables initialized in source code.
The string lives in the text segment, which is read-only and stores all of your code in addition to tidbits like string literals. 