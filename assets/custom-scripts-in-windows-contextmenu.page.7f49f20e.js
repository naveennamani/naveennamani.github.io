import{u as a,j as e}from"./renderer/_default.page.client.tsx.8da333f3.js";const l={blogPost:{title:"Grouping custom scripts in windows right click contextmenu",description:"A simple way to organize your scripts as a group in windows contextmenu.",image:"/images/python/contextmenu/4.png",imageAlt:"Contextmenu group with sub groups",datePublished:new Date(15987456e5),dateModified:new Date(15987456e5),tags:["python","windows","contextmenu"]},slug:"/python/organizing-windows-contextmenu/"};function i(n={}){const{wrapper:t}=Object.assign({},a(),n.components);return t?e.exports.jsx(t,Object.assign({},n,{children:e.exports.jsx(r,{})})):r();function r(){const s=Object.assign({h2:"h2",a:"a",span:"span",p:"p",ol:"ol",li:"li",code:"code",pre:"pre",h3:"h3",img:"img",em:"em",hr:"hr"},a(),n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsxs(s.h2,{id:"the-problem",children:["The problem",e.exports.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-problem",children:e.exports.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.exports.jsx(s.p,{children:`One fine boring day, I was cleaning unnecessary files in my PC and realized that
there are too many empty folders. Digging around my python scripts folders, I
realized that once upon a time I wrote a script to clean empty folders. The
script takes a directory path as an argument. But copying the directory path,
launching the cmd prompt, and passing the directory path to the script is a
waste of time. While I was tinkering about a solution, I right-clicked on the
folder and thought if only there is a menu item "Clean empty folders" that can
run my script, that will solve my problem.`}),`
`,e.exports.jsxs(s.h2,{id:"finding-the-solution",children:["Finding the solution",e.exports.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#finding-the-solution",children:e.exports.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.exports.jsx(s.p,{children:`The next moment, I stopped deleting files and instead started searching on
google about "Adding python scripts to the Windows context menu". I found a few
tutorials and understood that adding items to the context menu requires creating
keys in the windows registry. But thanks to the complexity of the Windows, the
solutions I found seemed to be quite complex or less informative. While most of
the tutorials focused on adding a single item to the context menu, grouping
items into a folder like structure is still not an intuitive step. It took me
some experimentation and time to figure out how Windows actually deals with the
registry keys when it comes to the context menu.`}),`
`,e.exports.jsx(s.p,{children:"There are atleast 15 registry keys where you can add context menu items."}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"{BASE_ROOT}\\\\Directory\\\\shell\\\\"}),` - to displays items when right click on a
directory`]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"{BASE_ROOT}\\\\Directory\\\\Background\\\\shell\\\\"}),` - to displays items when right
click on empty space in the file explorer`]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"{BASE_ROOT}\\\\DesktopBackground\\\\shell\\\\"}),` - to displays items when right
click on desktop background`]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"{BASE_ROOT}\\\\Drive\\\\shell\\\\"})," - to displays items when right click on a drive"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"{BASE_ROOT}\\\\*\\\\shell\\\\"})," - to displays items when right click on any file(s)"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"{BASE_ROOT}\\\\SystemFileAssociations\\\\{FILE_TYPE}\\\\shell\\\\"}),` - to displays
items when right click on a `,e.exports.jsx(s.code,{children:"FILE_TYPE"})," file type"]}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["where ",e.exports.jsx(s.code,{children:"BASE_ROOT"})," can be ",e.exports.jsx(s.code,{children:"HKEY_CLASSES_ROOT"}),`,
`,e.exports.jsx(s.code,{children:"HKEY_CURRENT_USER\\\\Software\\\\Classes"}),` or
`,e.exports.jsx(s.code,{children:"HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Classes"}),`. For adding items to all users
`,e.exports.jsx(s.code,{children:"HKEY_CLASSES_ROOT"}),` is used, and for adding items to the current user
`,e.exports.jsx(s.code,{children:"HKEY_CURRENT_USER\\\\Software\\\\Classes"})," is used."]}),`
`,e.exports.jsx(s.p,{children:"Now, each item in the context menu is associated with the following information."}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsx(s.li,{children:"Description of the item to be displayed on the context menu"}),`
`,e.exports.jsx(s.li,{children:"Registry key associated with the item"}),`
`,e.exports.jsx(s.li,{children:"Command to be executed"}),`
`,e.exports.jsx(s.li,{children:"[Optional] Path to an icon"}),`
`]}),`
`,e.exports.jsx(s.p,{children:`For grouping items into a folder like structure, the above details are required
for each item along with`}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsx(s.li,{children:"Name of the group"}),`
`,e.exports.jsx(s.li,{children:"Registry key associated with the group"}),`
`,e.exports.jsx(s.li,{children:"[Optional] Path to an icon"}),`
`]}),`
`,e.exports.jsx(s.p,{children:"The structure of the registry keys and values for a single item is shown below."}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-ini",children:[`ROOT
    `,e.exports.jsx(s.span,{className:"hljs-attr",children:"ITEM_REG_KEY"}),`
        = (Default) = Name of the `,e.exports.jsx(s.span,{className:"hljs-attr",children:"item"}),`
        = `,e.exports.jsx(s.span,{className:"hljs-attr",children:"Icon"}),` = Path to an icon
        `,e.exports.jsx(s.span,{className:"hljs-attr",children:"command"}),`
            = (Default) = Command
`]})}),`
`,e.exports.jsx(s.p,{children:"For a group of context menu items, the registry structure looks as follows."}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-ini",children:[`ROOT
    `,e.exports.jsx(s.span,{className:"hljs-attr",children:"GROUP_REG_KEY"}),`
        = `,e.exports.jsx(s.span,{className:"hljs-attr",children:"MUIVerb"}),` = Group name
        = `,e.exports.jsx(s.span,{className:"hljs-attr",children:"Icon"}),` = Path to an icon
        = `,e.exports.jsx(s.span,{className:"hljs-attr",children:"Subcommands"}),` =
        Shell
            `,e.exports.jsx(s.span,{className:"hljs-attr",children:"ITEM1_REG_KEY"}),`
                = (Default) = Name of the `,e.exports.jsx(s.span,{className:"hljs-attr",children:"item1"}),`
                = `,e.exports.jsx(s.span,{className:"hljs-attr",children:"Icon"}),` = Path to an icon
                `,e.exports.jsx(s.span,{className:"hljs-attr",children:"command"}),`
                    = (Default) = Command1
            `,e.exports.jsx(s.span,{className:"hljs-attr",children:"ITEM2_REG_KEY"}),`
                = (Default) = Name of the `,e.exports.jsx(s.span,{className:"hljs-attr",children:"item2"}),`
                = `,e.exports.jsx(s.span,{className:"hljs-attr",children:"Icon"}),` = Path to an icon
                `,e.exports.jsx(s.span,{className:"hljs-attr",children:"command"}),`
                    = (Default) = Command2
            `,e.exports.jsx(s.span,{className:"hljs-attr",children:"SUBGROUP_REG_KEY"}),`
                = `,e.exports.jsx(s.span,{className:"hljs-attr",children:"MUIVerb"}),` = Subgroup name
                = `,e.exports.jsx(s.span,{className:"hljs-attr",children:"Icon"}),` = Path to an icon
                = `,e.exports.jsx(s.span,{className:"hljs-attr",children:"Subcommands"}),` =
                Shell
                    `,e.exports.jsx(s.span,{className:"hljs-attr",children:"ITEM1_REG_KEY"}),`
                        = (Default) = Name of the `,e.exports.jsx(s.span,{className:"hljs-attr",children:"item1"}),`
                        = `,e.exports.jsx(s.span,{className:"hljs-attr",children:"Icon"}),` = Path to an icon
                        `,e.exports.jsx(s.span,{className:"hljs-attr",children:"command"}),`
                            = (Default) = Command1
                    ...
            ...
`]})}),`
`,e.exports.jsxs(s.h2,{id:"implementation",children:["Implementation",e.exports.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#implementation",children:e.exports.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.exports.jsxs(s.h3,{id:"test-implementation",children:["Test implementation",e.exports.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#test-implementation",children:e.exports.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.exports.jsxs(s.p,{children:[`Let us first implement a simple script to add a menu item group "Group 1" and a
two items "Item 1" and "Item 2" to the group. For adding registry keys we use
python's `,e.exports.jsx(s.code,{children:"winreg"}),` library. First, we import the required functions from the
`,e.exports.jsx(s.code,{children:"winreg"})," library."]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-python",children:[e.exports.jsx(s.span,{className:"hljs-comment",children:"# Import required functions"}),`
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"from"})," winreg ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"import"}),` (
    CreateKey, `,e.exports.jsx(s.span,{className:"hljs-comment",children:"# for creating/opening keys"}),`
    SetValue, `,e.exports.jsx(s.span,{className:"hljs-comment",children:"# for setting a key value"}),`
    SetValueEx, `,e.exports.jsx(s.span,{className:"hljs-comment",children:"# for storing key/value data"}),`
    HKEY_CURRENT_USER,
    REG_SZ, `,e.exports.jsx(s.span,{className:"hljs-comment",children:"# to set value as a string"}),`
    CloseKey
)
`]})}),`
`,e.exports.jsx(s.p,{children:"Then we create the group registry key for the current user."}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-python",children:[e.exports.jsx(s.span,{className:"hljs-comment",children:"# create the group registry key"}),`
group_reg_key_str = `,e.exports.jsx(s.span,{className:"hljs-string",children:'r"Software\\\\Classes\\\\Directory\\\\Background\\\\shell\\\\Group1\\\\"'}),`
group_reg_key = CreateKey(HKEY_CURRENT_USER, group_reg_key_str)

`,e.exports.jsx(s.span,{className:"hljs-comment",children:"# Create a key 'MUIVerb' and add 'Group 1' as value."}),`
`,e.exports.jsx(s.span,{className:"hljs-comment",children:"# 'Group 1' is shown in the conextmenu"}),`
SetValueEx(group_reg_key, `,e.exports.jsx(s.span,{className:"hljs-string",children:"'MUIVerb'"}),", ",e.exports.jsx(s.span,{className:"hljs-number",children:"0"}),", REG_SZ, ",e.exports.jsx(s.span,{className:"hljs-string",children:'"Group 1"'}),`)

`,e.exports.jsx(s.span,{className:"hljs-comment",children:"# Create a key 'SubCommands'"}),`
SetValueEx(group_reg_key, `,e.exports.jsx(s.span,{className:"hljs-string",children:"'SubCommands'"}),", ",e.exports.jsx(s.span,{className:"hljs-number",children:"0"}),", REG_SZ, ",e.exports.jsx(s.span,{className:"hljs-string",children:"''"}),`)

`,e.exports.jsx(s.span,{className:"hljs-comment",children:'# Create subkey "shell" for adding items'}),`
subcommands_key = CreateKey(group_reg_key, `,e.exports.jsx(s.span,{className:"hljs-string",children:"'shell'"}),`)
`]})}),`
`,e.exports.jsxs(s.p,{children:[`When you run this script it will create the group named "Group 1" in the context
menu. `,e.exports.jsx(s.img,{src:"/images/python/contextmenu/1.png",alt:""}),` But we haven't added any items to
that list. Let's continue and add two items.`]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-python",children:[e.exports.jsx(s.span,{className:"hljs-comment",children:"# Create item1 key"}),`
item1_key = CreateKey(subcommands_key, `,e.exports.jsx(s.span,{className:"hljs-string",children:"'item1'"}),`)
`,e.exports.jsx(s.span,{className:"hljs-comment",children:"# Set item name"}),`
SetValue(item1_key, `,e.exports.jsx(s.span,{className:"hljs-string",children:"''"}),", REG_SZ, ",e.exports.jsx(s.span,{className:"hljs-string",children:'"Item 1"'}),`)
`,e.exports.jsx(s.span,{className:"hljs-comment",children:"# Create command key and add the command"}),`
SetValue(item1_key, `,e.exports.jsx(s.span,{className:"hljs-string",children:"'command'"}),", REG_SZ, ",e.exports.jsx(s.span,{className:"hljs-string",children:"'cmd.exe'"}),`)
CloseKey(item1_key)

`,e.exports.jsx(s.span,{className:"hljs-comment",children:"# Create item2 key"}),`
item2_key = CreateKey(subcommands_key, `,e.exports.jsx(s.span,{className:"hljs-string",children:"'item2'"}),`)
`,e.exports.jsx(s.span,{className:"hljs-comment",children:"# Set item name"}),`
SetValue(item2_key, `,e.exports.jsx(s.span,{className:"hljs-string",children:"''"}),", REG_SZ, ",e.exports.jsx(s.span,{className:"hljs-string",children:'"Item 2"'}),`)
`,e.exports.jsx(s.span,{className:"hljs-comment",children:"# Create command key and add the command"}),`
SetValue(item2_key, `,e.exports.jsx(s.span,{className:"hljs-string",children:"'command'"}),", REG_SZ, ",e.exports.jsx(s.span,{className:"hljs-string",children:"'cmd.exe'"}),`)
CloseKey(item2_key)

CloseKey(subcommands_key)
CloseKey(group_reg_key)
`]})}),`
`,e.exports.jsx(s.p,{children:"Now, after running the complete script you'll get the following output."}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.img,{src:"/images/python/contextmenu/2.png",alt:""})}),`
`,e.exports.jsxs(s.p,{children:[`Open the registry editor and go to
`,e.exports.jsx(s.code,{children:"HKEY_CURRENT_USER\\\\Software\\\\Classes\\\\Directory\\\\Background\\\\shell\\\\"}),`. You'll
see the following structure corresponding to the context menu group we've
created.`]}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.img,{src:"/images/python/contextmenu/3.png",alt:""})}),`
`,e.exports.jsx(s.p,{children:`Congratulations, :smiley: :clap: :star2: we did it. The complete test script can
be found at`}),`
`,e.exports.jsx("a",{href:"https://gist.github.com/naninaveen/124fa967557d0719781bea129f278412",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(s.p,{children:"this link"})}),`
`,e.exports.jsxs(s.h3,{id:"general-purpose-implementation",children:["General purpose implementation",e.exports.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#general-purpose-implementation",children:e.exports.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.exports.jsxs(s.p,{children:[`For adding the groups and menu items to the context menu, first let us define
two classes `,e.exports.jsx(s.code,{children:"ContextMenuItem"})," and ",e.exports.jsx(s.code,{children:"ContextMenuGroup"}),` for representing a menu
item and a menu group respectively.`]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-python",children:[e.exports.jsx(s.span,{className:"hljs-keyword",children:"class"})," ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"ContextMenuItem"}),"(",e.exports.jsx(s.span,{className:"hljs-title class_ inherited__",children:"object"}),`):
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"def"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"__init__"}),"(",e.exports.jsxs(s.span,{className:"hljs-params",children:["self, item_name, command, item_reg_key = ",e.exports.jsx(s.span,{className:"hljs-string",children:'""'}),", icon = ",e.exports.jsx(s.span,{className:"hljs-string",children:'""'})]}),`):
        self.item_name = item_name
        self.item_reg_key = item_name `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"if"})," item_reg_key == ",e.exports.jsx(s.span,{className:"hljs-string",children:'""'})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"else"}),` item_reg_key
        self.icon = icon
        self.command = command


`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"class"})," ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"ContextMenuGroup"}),"(",e.exports.jsx(s.span,{className:"hljs-title class_ inherited__",children:"object"}),`):
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"def"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"__init__"}),"(",e.exports.jsxs(s.span,{className:"hljs-params",children:["self, group_name, group_reg_key = ",e.exports.jsx(s.span,{className:"hljs-string",children:'""'}),", icon = ",e.exports.jsx(s.span,{className:"hljs-string",children:'""'})]}),`):
        self.group_name = group_name
        self.group_reg_key = group_name `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"if"})," group_reg_key == ",e.exports.jsx(s.span,{className:"hljs-string",children:'""'})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"else"}),` group_reg_key
        self.icon = icon
        self.items = []

    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"def"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"add_item"}),"(",e.exports.jsx(s.span,{className:"hljs-params",children:"self, item"}),`):
        `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"assert"})," ",e.exports.jsx(s.span,{className:"hljs-built_in",children:"isinstance"}),`(
            item, (ContextMenuItem, ContextMenuGroup)
        ), `,e.exports.jsx(s.span,{className:"hljs-string",children:'"Please pass instance of ContextMenuItem or ContextMenuGroup"'}),`
        self.items.append(item)
`]})}),`
`,e.exports.jsx(s.p,{children:`Consider the following script which creates some nested groups and adds items to
them.`}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-python",children:["group1 = ContextMenuGroup(",e.exports.jsx(s.span,{className:"hljs-string",children:'"Group 1"'}),`)
group2 = ContextMenuGroup(`,e.exports.jsx(s.span,{className:"hljs-string",children:'"Group 2"'}),`)
group3 = ContextMenuGroup(`,e.exports.jsx(s.span,{className:"hljs-string",children:'"Group 3"'}),`)

group1.add_item(ContextMenuItem(`,e.exports.jsx(s.span,{className:"hljs-string",children:'"Item 1"'}),", ",e.exports.jsx(s.span,{className:"hljs-string",children:'"cmd.exe"'}),`))
group1.add_item(ContextMenuItem(`,e.exports.jsx(s.span,{className:"hljs-string",children:'"Item 2"'}),", ",e.exports.jsx(s.span,{className:"hljs-string",children:'"cmd.exe"'}),`))

group2.add_item(ContextMenuItem(`,e.exports.jsx(s.span,{className:"hljs-string",children:'"Item 3"'}),", ",e.exports.jsx(s.span,{className:"hljs-string",children:'"cmd.exe"'}),`))
group2.add_item(ContextMenuItem(`,e.exports.jsx(s.span,{className:"hljs-string",children:'"Item 4"'}),", ",e.exports.jsx(s.span,{className:"hljs-string",children:'"cmd.exe"'}),`))

group3.add_item(ContextMenuItem(`,e.exports.jsx(s.span,{className:"hljs-string",children:'"Item 5"'}),", ",e.exports.jsx(s.span,{className:"hljs-string",children:'"cmd.exe"'}),`))
group3.add_item(ContextMenuItem(`,e.exports.jsx(s.span,{className:"hljs-string",children:'"Item 6"'}),", ",e.exports.jsx(s.span,{className:"hljs-string",children:'"cmd.exe"'}),`))

group2.add_item(group3)
group1.add_item(group2)
`]})}),`
`,e.exports.jsxs(s.p,{children:["Now to add the details of ",e.exports.jsx(s.code,{children:"ContextMenuItem"})," and ",e.exports.jsx(s.code,{children:"ContextMenuGroup"}),` to the
registry, define two functions `,e.exports.jsx(s.code,{children:"create_item"})," and ",e.exports.jsx(s.code,{children:"create_group"}),`. The steps of
the functions are taken from the test implementation.`]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-python",children:[e.exports.jsx(s.span,{className:"hljs-keyword",children:"from"})," winreg ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"import"}),` (
    CreateKey,
    SetValue,
    SetValueEx,
    CloseKey,
    HKEY_CURRENT_USER,
    REG_SZ
)


`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"def"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"create_item"}),"(",e.exports.jsx(s.span,{className:"hljs-params",children:"root_key, item: ContextMenuItem"}),`):
    item_key = CreateKey(root_key, item.item_reg_key)
    SetValue(item_key, `,e.exports.jsx(s.span,{className:"hljs-string",children:"''"}),`, REG_SZ, item.item_name)
    SetValue(item_key, `,e.exports.jsx(s.span,{className:"hljs-string",children:"'command'"}),`, REG_SZ, item.command)
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"if"})," item.icon != ",e.exports.jsx(s.span,{className:"hljs-string",children:'""'}),`:
        SetValueEx(item_key, `,e.exports.jsx(s.span,{className:"hljs-string",children:"'Icon'"}),", ",e.exports.jsx(s.span,{className:"hljs-number",children:"0"}),`, REG_SZ, item.icon)
    CloseKey(item_key)


`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"def"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"create_group"}),"(",e.exports.jsx(s.span,{className:"hljs-params",children:"root_key, group: ContextMenuGroup"}),`):
    group_key = CreateKey(root_key, group.group_reg_key)

    SetValueEx(group_key, `,e.exports.jsx(s.span,{className:"hljs-string",children:"'MUIVerb'"}),", ",e.exports.jsx(s.span,{className:"hljs-number",children:"0"}),`, REG_SZ, group.group_name)
    SetValueEx(group_key, `,e.exports.jsx(s.span,{className:"hljs-string",children:"'SubCommands'"}),", ",e.exports.jsx(s.span,{className:"hljs-number",children:"0"}),", REG_SZ, ",e.exports.jsx(s.span,{className:"hljs-string",children:"''"}),`)
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"if"})," group.icon != ",e.exports.jsx(s.span,{className:"hljs-string",children:'""'}),`:
        SetValueEx(group_key, `,e.exports.jsx(s.span,{className:"hljs-string",children:"'Icon'"}),", ",e.exports.jsx(s.span,{className:"hljs-number",children:"0"}),`, REG_SZ, group.icon)

    subcommands_key = CreateKey(group_key, `,e.exports.jsx(s.span,{className:"hljs-string",children:'"shell"'}),`)

    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"for"})," item ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"in"}),` group.items:
        `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"if"})," ",e.exports.jsx(s.span,{className:"hljs-built_in",children:"isinstance"}),`(item, ContextMenuItem):
            create_item(subcommands_key, item)
        `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"elif"})," ",e.exports.jsx(s.span,{className:"hljs-built_in",children:"isinstance"}),`(item, ContextMenuGroup):
            create_group(subcommands_key, item)

    CloseKey(subcommands_key)
    CloseKey(group_key)
`]})}),`
`,e.exports.jsx(s.p,{children:"Now open the root key for directory background and create the group"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-python",children:[`user_key = CreateKey(
    HKEY_CURRENT_USER,
    `,e.exports.jsx(s.span,{className:"hljs-string",children:'r"Software\\\\Classes\\\\Directory\\\\Background\\\\shell\\\\"'}),`
)
create_group(user_key, group1)
`]})}),`
`,e.exports.jsx(s.p,{children:"Great, that's a nice nested context menu groups with items."}),`
`,e.exports.jsx("br",{}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.img,{src:"/images/python/contextmenu/4.png",alt:""})}),`
`,e.exports.jsx(s.p,{children:`But wait, you haven't told me about how I can remove them and how I can add
python scripts?`}),`
`,e.exports.jsx("h1",{className:"no_toc",children:e.exports.jsx("center",{children:e.exports.jsx("a",{href:"https://github.com/naveennamani/pywin-contextmenu",target:"_blank",rel:"noopener noreferrer",className:"no-underline",children:e.exports.jsxs(s.p,{children:["\xAF\\",e.exports.jsx(s.em,{children:"(\u30C4)"}),"/\xAF"]})})})}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsxs(s.p,{children:[`This post is a note to myself during the development of a pypi package. Please
checkout the pypi package `,e.exports.jsx(s.a,{href:"https://pypi.org/project/pywin-contextmenu/",children:"here"}),`
and the source code `,e.exports.jsx(s.a,{href:"https://github.com/naveennamani/pywin_contextmenu",children:"here"}),"."]}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsx("h4",{className:"no_toc",style:{color:"red"},children:e.exports.jsx(s.p,{children:"There is happiness in doing random things at random times with random people."})}),`
`,e.exports.jsx("h1",{className:"no_toc",children:"\xA9 Naveen Namani"}),`
`,e.exports.jsx(s.hr,{})]})}}export{i as default,l as metaData};
