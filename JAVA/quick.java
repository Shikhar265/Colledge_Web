import java.util.*;
public class quick
{
    static int[] a;
    static int part(int low, int high)
    {
        int pivot = a[low];
        int i = low, j=high;
        while (i<j) {
            while (i<high && a[i]<=pivot) {
                i++;
            }
            while (j>low && a[j]>pivot) {
                j--;
            }
            if(i<j)
            {
                int temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
        a[low]=a[j];
        a[j]=pivot;
        return j;
    }
    static void quicksort(int low, int high)
    {
        if(low<high)
        {
            int part=part(low,high);
            quicksort(low,part-1);
            quicksort(part+1,high);
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for(int i=0;i<n;i++)
        {
            a[i]=sc.nextInt();
        }
        quicksort(0,n-1);
        sc.close();
    }
}