[Udacity Course](https://classroom.udacity.com/courses/ud834-gwg)

# Android Basics

## Views 
- Anything an app can display
- Needs to be camelCase

Examples: 

```android
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
2. RelativeLayout
    - android:orientation
    - xmlns:android="http://schemas.android.com/apk/res/android" - xml namespace declaration: use this namespace in order to specify that all of these attributes belong to android

```android
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

```android
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
```android
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <ImageView
        android:src="@drawable/ocean"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_weight="1"
        android:scaleType="centerCrop" />

    <TextView
        android:text="You're invited!"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textColor="@android:color/white"
        android:textSize="54sp"
        android:background="#009688" />

    <TextView
        android:text="Bonfire at the beach"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textColor="@android:color/white"
        android:textSize="34sp"
        android:background="#009688" />

</LinearLayout>
```

[Udacity Android Visualizer](http://labs.udacity.com/android-visualizer/#/android/text-view)
[Android Developer Reference for TextView](https://developer.android.com/reference/android/widget/TextView.html)