# RLWebsite
RL Website
Commands:
    1) Update:
        git fetch origin
        git checkout main
        git pull origin main
        git checkout -b my-feature-branch
    or using newer syntax:
        git fetch origin
        git switch main
        git pull origin main
        git switch -c my-feature-branch
    
    2) Work/commit on the branch:
        # make changes in your editor...
        git add .
        git commit -m "Describe the change"

    3) Push the branch to the remote and set upstream (first push):
        git push -u origin my-feature-branch
    Subsequent pushes:
        git push
    
    4) Switch back to main without merging your branch:
        git switch main
        git pull origin main

    5) If you don't like the branch and want to delete it:
        git branch -D my-feature-branch
    Delete remotely:
        git push origin --delete my-feature-branch