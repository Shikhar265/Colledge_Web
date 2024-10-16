import java.util.*;

public class heap {
    
    public static void main (String[] args) 
    {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        List<Integer> arr=new ArrayList<Integer>();
        for (int i=0;i<n;i++) 
        {
            arr.add(sc.nextInt());
        }
           int val=sc.nextInt();
           heapify(arr,0,val);
           buildheap(arr);
           heapsort(arr);
           insert(arr,val);
           delete(arr,sc.nextInt());
        for (int i=0;i<arr.size();i++) 
        {
            System.out.print(arr.get(i)+" ");
        }
        sc.close();
    }
    static void heapify (List<Integer> arr, int i, int val) 
    {
        while (i<val) 
        {
            int index=i;
            int lc=2*i+1,rc=2*i+2;
            if (lc<val && arr.get(lc)>arr.get(i))
            {
                index=lc;
            }
            if (rc<val && arr.get(rc)>arr.get(index)) 
            {
                index=rc;
            }
            if (i==index)
            { 
                break;
            }
            Collections.swap(arr,i,index);
            i=index;
        }
    }
    static void buildheap(List<Integer> arr)
    {
        for(int i=(arr.size()-2)/2;i>=0;i--)
        {
            heapify(arr, i, arr.size());
        }
    }
    static void heapsort(List<Integer> arr)
    {
        buildheap(arr);
        int size=arr.size()-1;
        for (int i=0;i<arr.size()-1;i++)
        {
            Collections.swap(arr,0,size);
            heapify(arr,0,size);
            size--;
        }
    }
    static void delete (List<Integer> arr, int i)
    {
        arr.set(i,1000);
        while(i!=0)
        {
            Collections.swap(arr,i,(i-1)/2);
            i=(i-1)/2;
        }
        Collections.swap(arr,0,arr.size()-1);
        arr.remove(arr.size()-1);
        heapify(arr, 0, arr.size());
    }
    static void insert (List<Integer> arr, int val) 
    {
        arr.add(val);
        int i=arr.size()-1,par=(i-1)/2;
        while (i!=0 && arr.get(par)<arr.get(i)) 
        {
            Collections.swap(arr,i,par);
            i=par;
            par=(i-1)/2;
        }
    }
}