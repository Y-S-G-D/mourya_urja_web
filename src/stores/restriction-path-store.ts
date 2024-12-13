import {create} from 'zustand'

interface IRestrictionPathStore{
    selectedPaths: string[]
    resetSelectedPaths: () => void
    setSelectedPaths: (paths:string[]) => void
    removeSelectedPath: (path:string) => void
    addSelectedPath: (path:string) => void

}

export const useRestrictionPathStore = create<IRestrictionPathStore>((set) => ({
    selectedPaths: [],
    resetSelectedPaths: () => set({ selectedPaths: [] }),
    setSelectedPaths: (paths: string[]) => set({ selectedPaths: paths }),
    removeSelectedPath: (path: string) => set((state) => ({
        selectedPaths: state.selectedPaths.filter(p => p !== path)
    })),
    addSelectedPath: (path: string) => set((state) => ({
        selectedPaths: [...state.selectedPaths, path]
    }))
}));