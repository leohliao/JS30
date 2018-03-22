[Udacity Course](https://classroom.udacity.com/courses/ud834-gwg)

# Android Basics

## Views 
- Anything an app can display
- Needs to be camelCase

Examples: 

```xml
<ImageView
    android:text="This is my first Android line of code! Oh WOW, this thing is really cool, now I feel like we are back in business. Don't you think?"
    android:src="@drawable/android"
	android:textColor="#AED581"
    android:textSize="45sp"
    android:textStyle="bold"
    android:scaleType="center" 
    android:layout_width="900dp"
    android:layout_height="900dp" />
```

## View Group 

1. LinearLayout
    - `android:orientation="vertical"`
    - `xmlns:android="http://schemas.android.com/apk/res/android"` - xml namespace declaration: use this namespace in order to specify that all of these attributes belong to android

```xml
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="horizontal"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content">

    <TextView
        android:text="Tom"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textSize="24sp" />

    <TextView
        android:text="Tim"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textSize="24sp" />

    <TextView
        android:text="Todd"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textSize="24sp" />

</LinearLayout>
```

3. Layout weight
- wrap_content
- match_parent
- layout_width/layout_height

```xml
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <TextView
        android:text="Tom"
        android:layout_width="wrap_content"
        android:layout_height="0dp"
        android:layout_weight="1"
        android:textSize="24sp" />

    <TextView
        android:text="Tim"
        android:layout_width="wrap_content"
        android:layout_height="0dp"
        android:layout_weight="1"
        android:textSize="24sp" />

    <TextView
        android:text="Todd"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1"
        android:textSize="24sp" />

</LinearLayout>      
```
```xml
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <ImageView
        android:src="@drawable/ocean"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1"
        android:scaleType="centerCrop" />

    <TextView
        android:text="You're invited!"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:textColor="@android:color/white"
        android:textSize="54sp"
        android:background="#009688" />

    <TextView
        android:text="Bonfire at the beach"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:textColor="@android:color/white"
        android:textSize="34sp"
        android:background="#009688" />

</LinearLayout>
```

2. Relative Layout
    - `android:layout_alignParentTop="true"/"false"`
    - `android:layout_alignParentBottom`
    - `android:layout_alignParentLeft`
    - `android:layout_alignParentRight`
    - `android:layout_centerHorizontal`
    - `android:layout_centerVertical `
    - `android:layout_toLeftOf="@id/ben_text_view" // positioning children relative to other views `
    - `android:layout_above="@id/ben_text_view" `
    - `android:id="@+id/ben_text_view" // assigning view id names`
[Layout Params](https://developer.android.com/reference/android/widget/RelativeLayout.LayoutParams.html?utm_source=udacity&utm_medium=course&utm_campaign=android_basics)

```xml
<RelativeLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <ImageView
        android:layout_width="56dp"
        android:layout_height="56dp"
        android:scaleType="centerCrop"
        android:id="@+id/image_pebble_beach"
        android:src="@drawable/ocean" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Pebble Beach"
        android:layout_toRightOf="@id/image_pebble_beach"
        android:id="@+id/text_pebble_beach"
        android:textAppearance="?android:textAppearanceMedium" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_toRightOf="@id/image_pebble_beach"
        android:layout_below="@id/text_pebble_beach"
        android:id="@+id/text_california"
        android:text="California"
        android:textAppearance="?android:textAppearanceSmall" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
         android:layout_toRightOf="@id/image_pebble_beach"
        android:layout_below="@id/text_california"
        android:text="10 miles away"
        android:textAppearance="?android:textAppearanceSmall" />

</RelativeLayout>
```
3. Padding & Margin 
    - Needed ViewGroup if adding Margin
    - Margin is handle by parent view group where as padding is handle by children group
    - `android:padding="8dp"`
    - `android:paddingLeft="8dp"`
    - `android:layout_margin="8dp"`
    - `android:layout_marginRight="8dp"`
    
```xml
    <LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <ImageView
        android:src="@drawable/ocean"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1"
        android:scaleType="centerCrop"/>

    <TextView
        android:text="You're invited!"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
  		android:paddingLeft="16dp"
        android:paddingRight="16dp"
        android:paddingTop="16dp"
        android:paddingBottom="4dp"
        android:textColor="@android:color/white"
        android:textSize="45sp"
        android:background="#009688"/>

    <TextView
        android:text="Bonfire at the beach"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:paddingLeft="16dp"
        android:paddingTop="4dp"
        android:paddingBottom="16dp"
        android:textColor="@android:color/white"
        android:textSize="24sp"
        android:background="#009688"/>

</LinearLayout>
```

[Udacity Android Visualizer](http://labs.udacity.com/android-visualizer/#/android/text-view)
[Android Developer Reference for TextView](https://developer.android.com/reference/android/widget/TextView.html)