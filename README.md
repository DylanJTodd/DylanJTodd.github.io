# UIProject

This project is a redesign of the Facebook interface. The scope of this project mainly encapsulates the main page/feed, with additional pages/features added to enhance functionality. Below is a table of contents for what you can find in this README file.

## Table of Contents
1. [How to Run](#how-to-run)
2. [Usage](#usage)
3. [Assets Used](#assets-used)

## How to Run
To run this website for yourself, simply visit [https://dylanjtodd.github.io/](https://dylanjtodd.github.io/). This will allow you to access the latest version of our code. Alternatively, you can download this project and run the `index.html` file in an IDE such as VSCode to get the same version.


## Usage

This section provides a detailed explanation of how everything in the interface works, as well as all the functionalities. It will cover things in a left to right manner, similar to a book.

### Header

- **Facebook Home Icon**: Located at the top left, this icon will bring you to the main page, scrolled all the way up to the top. This is visible on every screen.

- **Search Bar**: Right next to the home icon, this search bar isn't visible on every screen, and doesn't have any functionality, however, you are able to type in it.

- **Header Buttons**: Along the header, there are three buttons. On the very left, the video tab, where you can click to navigate to the video page. Then, there's the main page, underlined and highlighted in blue to show the current page. This is the page you will begin from. Finally, there's the create post button, which pops up the create post interface.

- **Right Side Icons**: On the very right side, there are four buttons, two of which aren't functional, but we still included due to their importance. The first two icons are functional, however, and they are the messenger and notification buttons respectively. 

    - The messenger button will allow you to pop up the messenger interface, which has no functionality. If you want to exit this panel, you can check the top left for an "x" button. This is similar across all interfaces. Also, all interfaces will dim the background to allow you to focus on your current task.

    - Similarly, the notification button will pop up the notification interface, which also doesn't have any functionality. You can hit the x on the top left to close this interface.

    - The last two icons are the profile and settings icon, which are both ginormous interfaces, that we thought better to not include.

### Left Side Panel

This panel has two "tab-switches", or "modes". You can see what tab you're on based on what's blue and highlighted. 

- **Links Tab**: First is the links tab, where you can visit the different pages of the website, such as your profile, friends, marketplace, and more. Apart from the first five icons which are always on display, there are two collapsible categories under it, which have additional but less relevant information, such as climate science, fundraisers, and meta quest.

- **Discovery Hub**: If you switch tabs, you'll land in the discovery hub. This has a list of collapsible panels that display various information user's might want, such as friends online, or nearest events. You can edit the order and visibility of these panels by hitting the "edit panels" button. An interface will appear, which will allow you to drag and drop to change the order of panels, as well as checkbox for visibility. You won't be able to break this panel in any way, and you will be forced to stay inside the box. You can hit the x on the top left to close this interface.

Other than that, the entire panel itself is collapsible by hitting the arrow facing towards it on the right side of the panel. (This is near the top). Once hit, the panel will be collapsed, and you will be able to reopen it again by hitting the same arrow which took the place of the left side panel.

### Create Post Panel

Located in the main content area, any button you press on this panel (except for the user button which has no functionality) will pop up the create post interface. 

Once you're in this interface, you can leave by hitting the x button on the top right. Other than that, you're able to type in any text you want, and if you hit the post button, it will actually post your text-post. The interface also has the ability to change audience types. If you hit the public button underneath the Username, you have the ability to change the view of your post. If you want to leave this interface, you can hit the back arrow in the top right.

### Content Filter

The content filter is just above the main feed posts, and will not duplicate per post. It is always right above the first main post and below the create post panel. You can click on this button to open the content filter interface, which once again can be exited via the x button on the top left.

There is no real functionality in this interface. You can check and uncheck any filters you want, but there is no purpose. The apply and reset to default buttons will both just exit you out of the interface.

### Main Feed

The main feed features the same post which will keep automatically posting if you scroll down. There's a few interactions in this screen. Let me walk you through them. If you click on the image on this feed, you will be brought to full-screen mode, which will be covered later. For now, just know that it can be exited if you hit the facebook logo on the top left of the screen.

You're also able to write in the comment section of each post, and are able to post a comment. This comment will be unique to each post.

### Fullscreen-mode

The fullscreen-mode is another way of looking at posts with maximum viewing pleasure. The comment section is dynamically scaling to always meet the image and produce no black space.

As for the header in this mode, the facebook logo remains the same, and the searchbar is removed. Instead, there's an X button so you can exit the fullscreen-mode. There are no "Center buttons", but instead there are post controls, where you can zoom and unzoom (functionality not added), as well as apply the content filter, or maximize the post. Upon maximizing the post, you will view it in it's original dimensions (in terms of pixels), and you can click off of the image to exit this mode. 

The comments in this mode do not work, and the only functionality is the ability to switch between posts. (If you hover over the post, it will dim, and you will see the arrows left and right. A white arrow indicates the ability to move to another post).

### Video Page

This is the last functionality we have. Upon hitting the video button, as described before, you will be moved to the video page, where you can view videos, in the same way as feed. Comments also do work in this page, and everything is the same as the main feed. There are video buttons on the left side, which replace the left-side panel, which do not work.

## Assets Used

We utilized several resources to enhance the functionality and aesthetics of our website:

- **Icons**: All icons displayed on our website are courtesy of [Font Awesome Free](https://fontawesome.com/). These icons were implemented in both HTML and CSS.

- **Images**: A collection of images sourced from the internet were used for profile pictures, post pictures, and other general image usage. We aimed to reuse the same images as much as possible. You can find our collection of images in the `/images` folder of this project.

- **JavaScript Libraries**: We incorporated JQuery and JQuery UI to implement certain JavaScript functionalities, primarily for drag-and-drop features.
